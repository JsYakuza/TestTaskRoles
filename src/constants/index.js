const ADMIN = 'admin';
const EDITOR = 'editor';
const CUSTOMER = 'customer';
const UNAUTHORIZED = 'unauthorized';

const ROLES = [
    ADMIN,
    EDITOR,
    CUSTOMER,
];

const DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

const USERS_AVAILABLE_ROUTES = {
    [ADMIN]: [
        { id: 1, name: 'Main', path: '/' },
        { id: 2, name: 'Posts', path: 'posts' },
        { id: 3, name: 'Dashboard', path: 'dashboard' }
    ],
    [EDITOR]: [
        { id: 1, name: 'Main', path: '/' },
        { id: 2, name: 'Posts', path: 'posts' },
        { id: 3, name: 'Dashboard', path: 'dashboard' }
    ],
    [CUSTOMER]: [
        { id: 1, name: 'Main', path: '/' },
        { id: 2, name: 'Posts', path: 'posts' },
    ],
    [UNAUTHORIZED]: [{ id: 1, name: 'Main', path: '/' }],
}

const USER_PRIVILEGUES = {
    [ADMIN]: ['edit', 'view', 'create'],
    [EDITOR]: ['create', 'view'],
    [CUSTOMER]: ['view'],
}

module.exports = {
    ADMIN,
    EDITOR,
    CUSTOMER,
    ROLES,
    DATETIME_FORMAT,
    UNAUTHORIZED,
    USERS_AVAILABLE_ROUTES,
    USER_PRIVILEGUES,
}