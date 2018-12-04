import mn from './days/mn'
import tu from './days/tu'
import we from './days/we'
import th from './days/th'
import fr from './days/fr'
import st from './days/st'


const clockWork = [
    '10:30',
    '11:30',
    '16:00',
    '18:00',
    '19:00',
    '20:00',
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

export default [
    clockWork,
    counterClockOnDays,
    daysOnWeek,
    mn,
    tu,
    we,
    th,
    fr,
    st
];