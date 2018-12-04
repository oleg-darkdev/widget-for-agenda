import mn from './days/mn'
import tu from './days/tu'
import we from './days/we'
import th from './days/th'
import fr from './days/fr'
import st from './days/st'

const clockWork = [
    '9:00',
    '10:00',
    '11:00',
    '12:00'
];

const counterClockOnDays = [
    0,
    1,
    2,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16
];

const daysOnWeek = {
    mn: 'Понедельник',
    tu: 'Вторник',
    we: 'Среда',
    th: 'Четверг',
    fr: 'Пятница',
    st: 'Суббота'
};


export default {
    clockWork,
    counterClockOnDays,
    daysOnWeek,
    mn,
    tu,
    we,
    th,
    fr,
    st
};