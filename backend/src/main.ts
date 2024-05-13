import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { FormatterExceptionFilter } from "./exceptions/formatter-exception.filter";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(
        new FormatterExceptionFilter(app.get(HttpAdapterHost))
    );
    await app.listen(3001);
}
bootstrap();
