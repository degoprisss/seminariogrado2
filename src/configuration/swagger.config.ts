import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const configSwagger = async (app) => {

    app.enableCors({
        origin: '*',
    });

    const config = new DocumentBuilder()
        .setTitle('Proyecto final')
        .addBearerAuth()
        .setDescription('Documentación del proyecto final.')
        .setVersion('0.0.1')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    return SwaggerModule.setup('api/v1/projectend/docs', app, document);

}
