'use strict';
function _0x3333() {
    const _0x162e73 = [
        'autoIncrem',
        'hbmQt',
        '9EFmiEg',
        '3416546JFRUZG',
        'PxtUT',
        'erty',
        'type',
        'dropTable',
        '1erMdUg',
        'defineProp',
        'allowNull',
        'ent',
        'Users',
        'LZqmi',
        'ayIvS',
        '__esModule',
        'DataTypes',
        'CASCADE',
        'DATE',
        '949620mMyyGN',
        'LogTickets',
        '2580250wCglel',
        'FrSIM',
        '18684488xjGniA',
        'Queues',
        '1929640MuGEeJ',
        '1592115HktvMO',
        'primaryKey',
        'value',
        'sequelize',
        'exports',
        'INTEGER',
        'Tickets',
        'createTabl',
        'STRING',
        '297134qhALPZ',
        'QLpMz'
    ];
    _0x3333 = function () {
        return _0x162e73;
    };
    return _0x3333();
}
const _0x26be64 = _0x4c09;
(function (_0x209ef9, _0x4f1eed) {
    const _0x916182 = _0x4c09, _0x5597bd = _0x209ef9();
    while (!![]) {
        try {
            const _0x3f65a1 = parseInt(_0x916182(0x156)) / (0x100 * 0x10 + -0x21d * -0x4 + -0x239 * 0xb) * (-parseInt(_0x916182(0x14c)) / (0x1c17 + 0x41 * 0x15 + -0xe * 0x263)) + -parseInt(_0x916182(0x143)) / (-0x281 * -0xe + -0x1008 + 0x9d * -0x1f) + -parseInt(_0x916182(0x167)) / (-0xa1a + -0x36 * -0x17 + 0x544) + -parseInt(_0x916182(0x163)) / (-0x24c5 + -0xf9a + 0x1c * 0x1df) + parseInt(_0x916182(0x161)) / (-0x13c3 * 0x1 + -0x20a0 + -0x3469 * -0x1) + -parseInt(_0x916182(0x151)) / (-0x13d0 + -0x17a8 + 0x2b7f) + -parseInt(_0x916182(0x165)) / (-0x59e * 0x5 + -0x988 + 0x9e * 0x3d) * (-parseInt(_0x916182(0x150)) / (-0x1bc * 0xf + -0x19b4 + -0x33c1 * -0x1));
            if (_0x3f65a1 === _0x4f1eed)
                break;
            else
                _0x5597bd['push'](_0x5597bd['shift']());
        } catch (_0x57480f) {
            _0x5597bd['push'](_0x5597bd['shift']());
        }
    }
}(_0x3333, 0x48308 + 0x331 * -0x7b + 0x206d8));
const _0x2e30a2 = {};
function _0x4c09(_0x3f876b, _0x51da93) {
    const _0x27a651 = _0x3333();
    return _0x4c09 = function (_0x4e0ad3, _0x5bf1fa) {
        _0x4e0ad3 = _0x4e0ad3 - (0x21c3 + -0x9 * 0x18d + 0x128b * -0x1);
        let _0x21fd12 = _0x27a651[_0x4e0ad3];
        return _0x21fd12;
    }, _0x4c09(_0x3f876b, _0x51da93);
}
_0x2e30a2[_0x26be64(0x145)] = !![], Object[_0x26be64(0x157) + _0x26be64(0x153)](exports, _0x26be64(0x15d), _0x2e30a2);
const sequelize_1 = require(_0x26be64(0x146));
module[_0x26be64(0x147)] = {
    'up': _0x28bf3d => {
        const _0x24d637 = _0x26be64, _0x34045d = {};
        _0x34045d[_0x24d637(0x14d)] = _0x24d637(0x162), _0x34045d[_0x24d637(0x164)] = _0x24d637(0x15a), _0x34045d[_0x24d637(0x15b)] = _0x24d637(0x15f), _0x34045d[_0x24d637(0x15c)] = _0x24d637(0x149), _0x34045d[_0x24d637(0x152)] = _0x24d637(0x166);
        const _0x30ade6 = _0x34045d, _0x5b4870 = {};
        return _0x5b4870[_0x24d637(0x154)] = sequelize_1[_0x24d637(0x15e)][_0x24d637(0x148)], _0x5b4870[_0x24d637(0x14e) + _0x24d637(0x159)] = !![], _0x5b4870[_0x24d637(0x144)] = !![], _0x5b4870[_0x24d637(0x158)] = ![], _0x28bf3d[_0x24d637(0x14a) + 'e'](_0x30ade6[_0x24d637(0x14d)], {
            'id': _0x5b4870,
            'userId': {
                'type': sequelize_1[_0x24d637(0x15e)][_0x24d637(0x148)],
                'references': {
                    'model': _0x30ade6[_0x24d637(0x164)],
                    'key': 'id'
                },
                'onUpdate': _0x30ade6[_0x24d637(0x15b)],
                'onDelete': _0x30ade6[_0x24d637(0x15b)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[_0x24d637(0x15e)][_0x24d637(0x148)],
                'references': {
                    'model': _0x30ade6[_0x24d637(0x15c)],
                    'key': 'id'
                },
                'onUpdate': _0x30ade6[_0x24d637(0x15b)],
                'onDelete': _0x30ade6[_0x24d637(0x15b)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[_0x24d637(0x15e)][_0x24d637(0x148)],
                'references': {
                    'model': _0x30ade6[_0x24d637(0x152)],
                    'key': 'id'
                },
                'onUpdate': _0x30ade6[_0x24d637(0x15b)],
                'onDelete': _0x30ade6[_0x24d637(0x15b)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[_0x24d637(0x15e)][_0x24d637(0x14b)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x24d637(0x15e)][_0x24d637(0x160)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x24d637(0x15e)][_0x24d637(0x160)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x304f70 => {
        const _0x356f26 = _0x26be64, _0x3b7b08 = {};
        _0x3b7b08[_0x356f26(0x14f)] = _0x356f26(0x162);
        const _0x8b77da = _0x3b7b08;
        return _0x304f70[_0x356f26(0x155)](_0x8b77da[_0x356f26(0x14f)]);
    }
};