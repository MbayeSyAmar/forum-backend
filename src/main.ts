// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Crée l'application avec CORS configuré
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3001', // Autorise uniquement cette origine
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Méthodes HTTP autorisées
      credentials: true, // Permet l'envoi de cookies et d'autres informations d'authentification
    },
  });

  // Optionnel : si tu as besoin de définir des en-têtes personnalisés
  // app.enableCors({
  //   origin: 'http://localhost:3001',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
