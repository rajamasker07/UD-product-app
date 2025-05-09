import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product/schemas/product.schema';

const mockProduct = {
  name: 'Test Product',
  description: 'Test Description',
};

describe('AppController', () => {
  let app: TestingModule;

  let appController: AppController;
  let appService: AppService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([mockProduct]),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      expect(await appController.findAll()).toEqual([mockProduct]);
    });
  });
});
