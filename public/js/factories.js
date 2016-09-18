angular.module('myApp')
  .factory('CharacterVersionFactory',[
    'mainCharacter',
    'APP_VERSION',
    characterVersionFactory
    ])


function characterVersionFactory(mainCharacter,APP_VERSION){
  console.log(mainCharacter,APP_VERSION);
  return `${mainCharacter} ${APP_VERSION}`;
}