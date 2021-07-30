# Plant Manager APP

IMPORTANTE:

- ``npm install --global expo-cli``
- Para criar o projeto, vá até uma pasta qualquer e digite ``expo init plant-manager``. Isto irá criar uma pasta com todo o conteúdo necessário para o projeto. Ao aparecer a opção de template, selecionar **blank (TypeScript)**
- Para iniciar o projeto, digite ``expo start``
- Para testar no smartphone, baixar o applicativo **Expo**
- Para páginas, criar pasta ``pages`` na raiz
  - Os nomes das páginas têm extensão ``.tsx``
- Criar arquivo ``custom.d.ts`` na raiz e definir da seguinte forma:
~~~typescript
declare module '*.png' {
    const content: any;
    export default content;
}
~~~
