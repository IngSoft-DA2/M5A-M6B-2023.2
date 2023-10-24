
export enum PATHS {
    CHARACTERS = 'characters',
    ADMIN = 'admin',
}

export enum SEGMENTS {
    NEW = 'new',
}

const idParam = ':id'

export const CHARACTER_LIST_URL = PATHS.CHARACTERS;

export const CHARACTER_FORM_URL = `${PATHS.CHARACTERS}/${idParam}`;

export const getCharacterFormUrl = (id: string | number): string => {
    let url = CHARACTER_FORM_URL;
    return url.replace(idParam, id?.toString());
};

export const ADD_CHARACTER_URL = getCharacterFormUrl(SEGMENTS.NEW);

export const ADMIN_URL = PATHS.ADMIN;
