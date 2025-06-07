# WebApp (PWA) Template Setup

Aquest projecte inclou un script de configuració (`setup.sh`) i un fitxer de variables (`.env`) per personalitzar fàcilment el template de la teva WebApp.

## Passos per personalitzar

1. **Edita el fitxer `assets/.env`**  
   Omple els camps amb la informació de la teva aplicació:
   - `APP_NAME`
   - `SHORT_NAME`
   - `DESCRIPTION`
   - `URL`
   - `START_URL`
   

2. **Imatges**  
   Edita les imatges següents:
   - assets/horizontal.xcf
   - assets/square.xcf
   Exporta a png amb el mateix nom
   

3. **Executa el script de setup**  
   Assegura't de tenir [ImageMagick](https://imagemagick.org) instal·lat.  
   Instal·lar amb bash no amb sh
   Executa:
   ```bash
   bash setup.sh

## ToDo
- GitHub Workflow: Definir un workflow genèric (.github/workflows/ci.yml) per fer generar versió i publicar.
- Prettier: És per formatar codi (estil), mentre que linting (com ESLint) és per trobar errors o males pràctiques. Són complementaris però diferents.
