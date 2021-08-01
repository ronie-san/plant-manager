# Plant Manager APP

## IMPORTANTE

- ``npm install --global expo-cli``
- Para criar o projeto, vá até uma pasta qualquer e digite ``expo init plant-manager``. Isto irá criar uma pasta com todo o conteúdo necessário para o projeto. Ao aparecer a opção de template, selecionar **blank (TypeScript)**
- Para iniciar o projeto, digite ``expo start``
- Para testar no smartphone, baixar o applicativo **Expo**
- Para páginas, criar pasta ``pages`` na raiz
  - Os arquivos das páginas têm extensão ``.tsx``
- Criar arquivo ``custom.d.ts`` na raiz e definir da seguinte forma:
~~~typescript
declare module '*.png' {
    const content: any;
    export default content;
}
~~~
- Para criar componentes, criar pasta ``components``
  - Os arquivos dos componentes têm extensão ``.tsx``
- Instalar ``vector-icons`` do ``expo``: ``expo install @expo/vector-icons``
  - Para mais informações, ver [Expo Icons](docs.expo.io/guides/icons/ "Documentação Expo Icons")
- Verificar as fontes utlizadas no site [Google Fonts](fonts.google.com/ "Google Fonts")
  - Instalar Expo Google Fonts: ``expo install expo-font @expo-google-fonts/[NOME DA FONTE]``
- Instalar ``expo-app-loading``: ``expo install expo-app-loading``
- Instalar [React Navigation](reactnavigation.org/docs/getting-started/ "Documentação React Navigation"): ``npm install @react-navigation/native``
- Instalar dependências do React Navigation
  - ``expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view``
  - ``npm install @react-navigation/stack``
- Instalar o [Iphone X Helper](github.com/ptelad/react-native-iphone-x-helper "Documentação Iphone X Helper"): ``npm i react-native-iphone-x-helper --save``
- Cria pasta ``services`` e colocar o arquivo ``server.json``
  - Instalar o Axios: ``npm install axios``
  - Criar arquivo ``api.ts`` nesta pasta
  - Instalar o [JSON Server](github.com/typicode/json-server "Documentação JSON Server"): ``npm install -g json-server``
    - Para rodar: ``json-server ./src/services/server.json --host 192.168.0.158 --port 19000``