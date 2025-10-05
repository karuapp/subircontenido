'use strict';
const _0x1f1b8c = _0x2e83;
function _0x2e83(_0x564280, _0x319351) {
    const _0x742dac = _0x5dde();
    return _0x2e83 = function (_0x27258b, _0x1f55b1) {
        _0x27258b = _0x27258b - (-0x1 * 0x25c9 + 0x21ae + 0x5 * 0x103);
        let _0x593154 = _0x742dac[_0x27258b];
        return _0x593154;
    }, _0x2e83(_0x564280, _0x319351);
}
(function (_0x3ee700, _0x147590) {
    const _0x435836 = _0x2e83, _0x489a02 = _0x3ee700();
    while (!![]) {
        try {
            const _0x2bd641 = -parseInt(_0x435836(0xf6)) / (0x162 * 0x6 + 0x3bd + -0xc08) + -parseInt(_0x435836(0x111)) / (-0x301 * 0x5 + 0x17 * 0xa3 + 0x62) * (parseInt(_0x435836(0x115)) / (-0x1a4d + -0x1057 + 0x2aa7)) + parseInt(_0x435836(0x109)) / (0x2241 + -0x1ffa + -0x243) + -parseInt(_0x435836(0xfc)) / (-0xc8b + 0x1121 * -0x1 + 0x1db1 * 0x1) * (parseInt(_0x435836(0x100)) / (0x1fc7 + -0x66 * -0x2b + -0x5 * 0x9c7)) + parseInt(_0x435836(0x103)) / (-0x25d4 + -0x12e2 + 0x38bd) * (parseInt(_0x435836(0x105)) / (0x351 * 0x2 + -0x2099 * 0x1 + 0x19ff)) + -parseInt(_0x435836(0xf9)) / (-0x26fb + -0x1f6 + -0x1 * -0x28fa) + parseInt(_0x435836(0x112)) / (-0x288 * -0x5 + -0x99f + -0x2ff);
            if (_0x2bd641 === _0x147590)
                break;
            else
                _0x489a02['push'](_0x489a02['shift']());
        } catch (_0x27b176) {
            _0x489a02['push'](_0x489a02['shift']());
        }
    }
}(_0x5dde, -0x8cb3f * 0x1 + 0xbfd36 + -0x510b1 * -0x1));
const _0x468277 = {};
_0x468277[_0x1f1b8c(0x118)] = !![], Object[_0x1f1b8c(0x116) + _0x1f1b8c(0x10a)](exports, _0x1f1b8c(0xfd), _0x468277);
const sequelize_1 = require(_0x1f1b8c(0x104));
function _0x5dde() {
    const _0xdd043c = [
        '1286037ZsJndF',
        'STRING',
        'SfLhv',
        '3865YvVswE',
        '__esModule',
        'INTEGER',
        'fUAKi',
        '1098OOQyep',
        'EJqik',
        'StepsReply',
        '1582fkKwYq',
        'sequelize',
        '1080irZIfj',
        'CfLSW',
        'CASCADE',
        'YRMOu',
        '733248agxdjm',
        'erty',
        'Users',
        'Actions',
        'autoIncrem',
        'DataTypes',
        'allowNull',
        'type',
        '3814sfATQP',
        '14805300PDaMnV',
        'SET\x20NULL',
        'ZMidM',
        '948IuddKq',
        'defineProp',
        'primaryKey',
        'value',
        'DATE',
        'exports',
        'ent',
        '266036RRzkyp',
        'dropTable',
        'createTabl'
    ];
    _0x5dde = function () {
        return _0xdd043c;
    };
    return _0x5dde();
}
module[_0x1f1b8c(0xf4)] = {
    'up': _0x4e17af => {
        const _0x2f6966 = _0x1f1b8c, _0x544b22 = {};
        _0x544b22[_0x2f6966(0x108)] = _0x2f6966(0x102) + _0x2f6966(0x10c), _0x544b22[_0x2f6966(0x114)] = _0x2f6966(0x102), _0x544b22[_0x2f6966(0x106)] = _0x2f6966(0x107), _0x544b22[_0x2f6966(0xff)] = _0x2f6966(0x10b), _0x544b22[_0x2f6966(0x101)] = _0x2f6966(0x113);
        const _0x6444ee = _0x544b22, _0xf71e85 = {};
        return _0xf71e85[_0x2f6966(0x110)] = sequelize_1[_0x2f6966(0x10e)][_0x2f6966(0xfe)], _0xf71e85[_0x2f6966(0x10d) + _0x2f6966(0xf5)] = !![], _0xf71e85[_0x2f6966(0x117)] = !![], _0xf71e85[_0x2f6966(0x10f)] = ![], _0x4e17af[_0x2f6966(0xf8) + 'e'](_0x6444ee[_0x2f6966(0x108)], {
            'id': _0xf71e85,
            'stepReplyId': {
                'type': sequelize_1[_0x2f6966(0x10e)][_0x2f6966(0xfe)],
                'references': {
                    'model': _0x6444ee[_0x2f6966(0x114)],
                    'key': 'id'
                },
                'onUpdate': _0x6444ee[_0x2f6966(0x106)],
                'onDelete': _0x6444ee[_0x2f6966(0x106)]
            },
            'words': {
                'type': sequelize_1[_0x2f6966(0x10e)][_0x2f6966(0xfa)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[_0x2f6966(0x10e)][_0x2f6966(0xfe)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[_0x2f6966(0x10e)][_0x2f6966(0xfa)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[_0x2f6966(0x10e)][_0x2f6966(0xfe)],
                'references': {
                    'model': _0x6444ee[_0x2f6966(0xff)],
                    'key': 'id'
                },
                'onUpdate': _0x6444ee[_0x2f6966(0x106)],
                'onDelete': _0x6444ee[_0x2f6966(0x101)]
            },
            'createdAt': {
                'type': sequelize_1[_0x2f6966(0x10e)][_0x2f6966(0x119)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x2f6966(0x10e)][_0x2f6966(0x119)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x4de429 => {
        const _0x14fe32 = _0x1f1b8c, _0x161b0b = {};
        _0x161b0b[_0x14fe32(0xfb)] = _0x14fe32(0x102) + _0x14fe32(0x10c);
        const _0x2c23f0 = _0x161b0b;
        return _0x4de429[_0x14fe32(0xf7)](_0x2c23f0[_0x14fe32(0xfb)]);
    }
};