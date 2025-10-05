'use strict';
function _0x40c5(_0x32e40e, _0x2956ad) {
    const _0x23461b = _0x4057();
    return _0x40c5 = function (_0x5f21cd, _0x1a0abf) {
        _0x5f21cd = _0x5f21cd - (0x1b * -0x9b + -0x7 * -0x545 + -0x1 * 0x1362);
        let _0x5b2fea = _0x23461b[_0x5f21cd];
        return _0x5b2fea;
    }, _0x40c5(_0x32e40e, _0x2956ad);
}
const _0x134d06 = _0x40c5;
(function (_0x4832ab, _0x425ba2) {
    const _0x1fd49e = _0x40c5, _0xa08d76 = _0x4832ab();
    while (!![]) {
        try {
            const _0x2056f4 = -parseInt(_0x1fd49e(0x139)) / (0x3 * -0x871 + -0x1aaf + 0x3403) + parseInt(_0x1fd49e(0x12f)) / (-0x10f0 * 0x1 + -0x257a + 0x366c) * (parseInt(_0x1fd49e(0x151)) / (0x8a7 + -0x104d + -0x1 * -0x7a9)) + parseInt(_0x1fd49e(0x12b)) / (0x73a + 0x3 * -0x293 + -0x83 * -0x1) + parseInt(_0x1fd49e(0x130)) / (-0x431 * 0x2 + -0x24bc + 0x907 * 0x5) * (parseInt(_0x1fd49e(0x149)) / (-0xd44 + 0x517 * 0x5 + -0xc29)) + parseInt(_0x1fd49e(0x13e)) / (-0x1 * -0x7db + 0x3e * 0x83 + -0x13c7 * 0x2) + parseInt(_0x1fd49e(0x12d)) / (0xa00 + 0xff8 + -0x19f0) * (parseInt(_0x1fd49e(0x12a)) / (-0xa * 0x295 + -0x1090 + 0x2a6b)) + -parseInt(_0x1fd49e(0x14e)) / (0x1 * -0x290 + 0x181f + -0x1585) * (parseInt(_0x1fd49e(0x13b)) / (-0x2 * 0xf6d + -0x2f * 0x25 + 0x25b0));
            if (_0x2056f4 === _0x425ba2)
                break;
            else
                _0xa08d76['push'](_0xa08d76['shift']());
        } catch (_0x34976f) {
            _0xa08d76['push'](_0xa08d76['shift']());
        }
    }
}(_0x4057, 0x17c81a + -0x410 * -0x3f2 + 0x475c * -0x60));
const _0x118e2f = {};
_0x118e2f[_0x134d06(0x129)] = !![], Object[_0x134d06(0x14f) + _0x134d06(0x13c)](exports, _0x134d06(0x14b), _0x118e2f);
const sequelize_1 = require(_0x134d06(0x148));
module[_0x134d06(0x128)] = {
    'up': _0x7642d8 => {
        const _0x1b1576 = _0x134d06, _0x11d121 = {};
        _0x11d121[_0x1b1576(0x144)] = _0x1b1576(0x135) + _0x1b1576(0x140), _0x11d121[_0x1b1576(0x12c)] = _0x1b1576(0x136), _0x11d121[_0x1b1576(0x150)] = _0x1b1576(0x133), _0x11d121[_0x1b1576(0x145)] = _0x1b1576(0x146), _0x11d121[_0x1b1576(0x13a)] = _0x1b1576(0x131), _0x11d121[_0x1b1576(0x142)] = _0x1b1576(0x137);
        const _0x140e0a = _0x11d121, _0x6d7de3 = {};
        return _0x6d7de3[_0x1b1576(0x141)] = sequelize_1[_0x1b1576(0x13d)][_0x1b1576(0x14d)], _0x6d7de3[_0x1b1576(0x14a) + _0x1b1576(0x147)] = !![], _0x6d7de3[_0x1b1576(0x132)] = !![], _0x6d7de3[_0x1b1576(0x143)] = ![], _0x7642d8[_0x1b1576(0x12e) + 'e'](_0x140e0a[_0x1b1576(0x144)], {
            'id': _0x6d7de3,
            'evaluation': {
                'type': sequelize_1[_0x1b1576(0x13d)][_0x1b1576(0x134)],
                'onUpdate': _0x140e0a[_0x1b1576(0x12c)],
                'onDelete': _0x140e0a[_0x1b1576(0x150)],
                'allowNull': ![]
            },
            'attempts': {
                'type': sequelize_1[_0x1b1576(0x13d)][_0x1b1576(0x14d)],
                'onUpdate': _0x140e0a[_0x1b1576(0x12c)],
                'onDelete': _0x140e0a[_0x1b1576(0x12c)],
                'allowNull': ![]
            },
            'ticketId': {
                'type': sequelize_1[_0x1b1576(0x13d)][_0x1b1576(0x14d)],
                'onUpdate': _0x140e0a[_0x1b1576(0x12c)],
                'onDelete': _0x140e0a[_0x1b1576(0x12c)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[_0x1b1576(0x13d)][_0x1b1576(0x14d)],
                'references': {
                    'model': _0x140e0a[_0x1b1576(0x145)],
                    'key': 'id'
                },
                'onUpdate': _0x140e0a[_0x1b1576(0x12c)],
                'onDelete': _0x140e0a[_0x1b1576(0x13a)]
            },
            'tenantId': {
                'type': sequelize_1[_0x1b1576(0x13d)][_0x1b1576(0x14d)],
                'references': {
                    'model': _0x140e0a[_0x1b1576(0x142)],
                    'key': 'id'
                },
                'onUpdate': _0x140e0a[_0x1b1576(0x12c)],
                'onDelete': _0x140e0a[_0x1b1576(0x12c)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x1b1576(0x13d)][_0x1b1576(0x14c)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x1b1576(0x13d)][_0x1b1576(0x14c)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x52cb54 => {
        const _0x1abc2a = _0x134d06, _0x3c44fb = {};
        _0x3c44fb[_0x1abc2a(0x13f)] = _0x1abc2a(0x135) + _0x1abc2a(0x140);
        const _0x4ab32f = _0x3c44fb;
        return _0x52cb54[_0x1abc2a(0x138)](_0x4ab32f[_0x1abc2a(0x13f)]);
    }
};
function _0x4057() {
    const _0x28a4fc = [
        '866718PcGMRp',
        'qHsYS',
        '11MbIzKn',
        'erty',
        'DataTypes',
        '2897300yvxdSr',
        'lYXCa',
        'uations',
        'type',
        'jKjbv',
        'allowNull',
        'cAYvc',
        'iqdVK',
        'Users',
        'ent',
        'sequelize',
        '102FTigpI',
        'autoIncrem',
        '__esModule',
        'DATE',
        'INTEGER',
        '26222830Yzvrnx',
        'defineProp',
        'NUsEm',
        '27TAbLnH',
        'exports',
        'value',
        '9CrtpCf',
        '3839108WIzslf',
        'PAJkG',
        '6166064QLWMGz',
        'createTabl',
        '329938UjiWco',
        '210315DtWHpQ',
        'SET\x20NULL',
        'primaryKey',
        'RESTRICT',
        'STRING',
        'TicketEval',
        'CASCADE',
        'Tenants',
        'dropTable'
    ];
    _0x4057 = function () {
        return _0x28a4fc;
    };
    return _0x4057();
}