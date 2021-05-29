const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://xmenapiheroku.herokuapp.com/api';
//export const getCharacters = `${base_url}/characters`;
export const getCharacters = `${base_url}/characters`;

export const getEpisodes = () => `${cors_anywhere}${base_url}/episodes`;
//export const getCharacterByID = id => ${cors_anywhere}`${base_url}/characters/${id}`;

export const loremIpsum = [
    {id:1, name: 'lorem', total: 100},
    {id:2, name: 'lorem', total: 300}
];