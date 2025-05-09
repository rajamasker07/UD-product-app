import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product/schemas/product.schema';
import { CreateProductDto } from './product/dto/create-product.dto';


describe('AppService', () => {
  let appService: AppService;
  let testingModule: TestingModule; // Declare testingModule here
  let mockProductModel: any; // Declare mockProductModel here
  beforeAll(async () => {
    testingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getModelToken('Product'),
          useValue: function() { // Provide a function that acts like a constructor
            return {
              save: jest.fn(), // Return an object with a mock save method
            };
          },
        },
      ],
    }).compile();

    appService = testingModule.get<AppService>(AppService);
    
  });

  // beforeEach block for resetting mocks if needed for individual tests
  beforeEach(() => { jest.clearAllMocks(); });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  describe('create', () => {
    it('should call save on the created product', async () => {
      const createProductDto: CreateProductDto = {
        name: 'Test Product',
        description: 'A test product',
      };

      // Access the mockProductModel (which is now the constructor function)
      const mockProductModel = testingModule.get<any>(getModelToken('Product'));

      await appService.create(createProductDto);
      expect((mockProductModel as any)().save).toHaveBeenCalled(); // Access the save method from the instance returned by the constructor call
    });
  });
});