# Suzzy Alves Fotografia

Site em Astro para apresentar os ensaios da Suzzy e receber pedidos de agendamento pelo WhatsApp. A página inicial reúne a apresentação, o carrossel de ensaios e o mapa do estúdio em Guarulhos. A galeria tem 72 fotos organizadas em oito categorias.

## Rodar localmente

Use Node.js 22.23.4 ou superior em uma versão LTS. Na raiz do projeto, instale as dependências e inicie o servidor de desenvolvimento.

```sh
npm ci
npm run dev
```

Abra [localhost:4321](http://localhost:4321/).

| Comando | Função |
| --- | --- |
| `npm run check` | Checa os arquivos Astro e TypeScript |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve localmente a versão de `dist/` após o build |

Para publicar, execute `npm ci` e `npm run build` na hospedagem e use `dist/` como diretório de saída.

## Páginas

- `/` reúne a apresentação, os [ensaios](src/components/Portfolio.astro) e a [seção de localização e horários](src/components/Studio.astro) em `/#estudio`.
- `/galeria/` contém os álbuns completos. O link “Quero ver mais” abre a galeria na categoria selecionada no carrossel.
- `/estudio/` redireciona para `/#estudio`.

## Atualizar conteúdo

- **Fotos.** Salve as imagens em WebP em `src/assets/ensaios/<categoria>/`, com nomes numerados como `01.webp` e `02.webp`. A galeria segue essa ordem e o carrossel mostra as primeiras quatro fotos de cada álbum. Para adicionar uma categoria, registre seu nome e o slug da pasta em [`src/lib/albums.ts`](src/lib/albums.ts).
- **Contato e localização.** Atualize o telefone, o endereço, os horários e as coordenadas em [`src/lib/site.ts`](src/lib/site.ts). O telefone usa o formato internacional com apenas dígitos. As coordenadas definem o pino e o destino do botão “Como chegar”.
- **Oferta de 5%.** A oferta aparece uma vez por sessão da aba. No desktop, o gatilho é a saída do ponteiro pelo topo da página. No celular, é a rolagem de volta após visualizar o portfólio. A pessoa pede o desconto pelo WhatsApp, e a Suzzy o aplica na confirmação da reserva. Os gatilhos e os textos da oferta estão em [`src/components/Offer.astro`](src/components/Offer.astro) e a mensagem do WhatsApp em [`src/lib/site.ts`](src/lib/site.ts).
