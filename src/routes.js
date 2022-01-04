// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, '/login'),
    register: path(ROOTS_AUTH, '/register'),
    resetPassword: path(ROOTS_AUTH, '/reset-password'),
    forgotPassword: path(ROOTS_AUTH, '/forgot-password'),
    verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_PAGE = {
    comingSoon: '/coming-soon',
    maintenance: '/maintenance',
    page404: '/404',
    page500: '/500',
    about: '/about-us',
    contact: '/contact-us',
    faqs: '/faqs',
};

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    home: path(ROOTS_DASHBOARD, '/home'),
    assignment: {
        root: path(ROOTS_DASHBOARD, '/assignment'),
        list: path(ROOTS_DASHBOARD, '/assignment/list'),
        newAssignment: path(ROOTS_DASHBOARD, '/assignment/new'),
        showById: path(ROOTS_DASHBOARD, '/assignment/detail'),
        editById: path(ROOTS_DASHBOARD, `/assignment/edit`),
    },
    classroom: {
        root: path(ROOTS_DASHBOARD, '/classroom'),
        list: path(ROOTS_DASHBOARD, '/classroom/list'),
        newClassroom: path(ROOTS_DASHBOARD, '/classroom/new'),
        showById: path(ROOTS_DASHBOARD, '/classroom/detail'),
        editById: path(ROOTS_DASHBOARD, `/classroom/edit`),
    },
    quiz: {
        root: path(ROOTS_DASHBOARD, '/quiz'),
        list: path(ROOTS_DASHBOARD, '/quiz/list'),
        newQuiz: path(ROOTS_DASHBOARD, '/quiz/new'),
        showById: path(ROOTS_DASHBOARD, '/quiz/detail'),
        editById: path(ROOTS_DASHBOARD, `/quiz/edit`),
    },
    quote: {
        root: path(ROOTS_DASHBOARD, '/quote'),
        list: path(ROOTS_DASHBOARD, '/quote/list'),
        newQuote: path(ROOTS_DASHBOARD, '/quote/new'),
        showById: path(ROOTS_DASHBOARD, '/quote/detail'),
        editById: path(ROOTS_DASHBOARD, `/quote/edit`),
    },
    settings: {
        root: path(ROOTS_DASHBOARD, '/settings'),
    },
    subject: {
        root: path(ROOTS_DASHBOARD, '/subject'),
        list: path(ROOTS_DASHBOARD, '/subject/list'),
        newSubject: path(ROOTS_DASHBOARD, '/subject/new'),
        showById: path(ROOTS_DASHBOARD, '/subject/detail'),
        editById: path(ROOTS_DASHBOARD, `/subject/edit`),
    },
    user: {
        root: path(ROOTS_DASHBOARD, '/user'),
        list: path(ROOTS_DASHBOARD, '/user/list'),
        newUser: path(ROOTS_DASHBOARD, '/user/new'),
        showById: path(ROOTS_DASHBOARD, '/user/detail'),
        editById: path(ROOTS_DASHBOARD, `/user/edit`),
        profile: path(ROOTS_DASHBOARD, '/user/profile')
    },
}
