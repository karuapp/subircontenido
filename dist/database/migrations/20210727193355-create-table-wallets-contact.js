'use strict';
const _0x24a035 = _0x370e;
function _0x370e(_0x3a4d7b, _0x261fd2) {
    const _0xe64f26 = _0x41f9();
    return _0x370e = function (_0x1d4266, _0x16947c) {
        _0x1d4266 = _0x1d4266 - (0x3 * 0x405 + 0x2538 + -0x2f74);
        let _0x21d5fd = _0xe64f26[_0x1d4266];
        return _0x21d5fd;
    }, _0x370e(_0x3a4d7b, _0x261fd2);
}
function _0x41f9() {
    const _0x13e182 = [
        'tEErA',
        '1529895oUzbZZ',
        'autoIncrem',
        '8965176xtkqpp',
        'Tenants',
        '__esModule',
        'erty',
        'DataTypes',
        '183288ClPhzP',
        'createTabl',
        'ContactWal',
        'fzqbN',
        '6021xdcyoR',
        'SkzhS',
        'Contacts',
        'exports',
        '63610chONbA',
        '2675281sNctkI',
        'Users',
        'dropTable',
        'defineProp',
        'ZSfOn',
        '12TLzAgf',
        'type',
        'lets',
        '5YTfjEZ',
        'value',
        'allowNull',
        'ent',
        'pyOVG',
        'primaryKey',
        'djZlH',
        'sequelize',
        '875488hkNQjW',
        'CASCADE',
        'DATE',
        'INTEGER',
        '994412fWCPAv'
    ];
    _0x41f9 = function () {
        return _0x13e182;
    };
    return _0x41f9();
}
(function (_0x5eec50, _0x29a67f) {
    const _0x3063c5 = _0x370e, _0x5e140c = _0x5eec50();
    while (!![]) {
        try {
            const _0x2c24f3 = -parseInt(_0x3063c5(0x1f1)) / (-0x1ee + 0x34 * 0x9d + -0x1df5 * 0x1) + -parseInt(_0x3063c5(0x1e4)) / (0x1 * -0x45d + -0x1fec + -0x1 * -0x244b) + -parseInt(_0x3063c5(0x1ea)) / (0x1eac + -0x11 * -0x1d3 + -0x3dac) + -parseInt(_0x3063c5(0x1e8)) / (0x35e + 0x205 * 0x3 + -0x21 * 0x49) * (parseInt(_0x3063c5(0x1dc)) / (-0x17be + -0xd84 + 0x2547)) + -parseInt(_0x3063c5(0x1d9)) / (0x7 * -0x36b + -0x2 * 0x209 + 0x1c05) * (parseInt(_0x3063c5(0x1d4)) / (0x2218 + 0xd9 * 0xa + -0x2a8b * 0x1)) + -parseInt(_0x3063c5(0x1ec)) / (0xb1f * -0x1 + -0x689 + 0x11b0) + -parseInt(_0x3063c5(0x1f5)) / (0x3 * 0x1cf + 0xb * -0x27e + 0x1606) * (-parseInt(_0x3063c5(0x1d3)) / (-0x204 + -0x9 * -0xf9 + -0x6b3));
            if (_0x2c24f3 === _0x29a67f)
                break;
            else
                _0x5e140c['push'](_0x5e140c['shift']());
        } catch (_0x51a797) {
            _0x5e140c['push'](_0x5e140c['shift']());
        }
    }
}(_0x41f9, -0x153 * 0x164b + -0x1 * 0x6e85a + 0x338c5b));
const _0x34bfa9 = {};
_0x34bfa9[_0x24a035(0x1dd)] = !![], Object[_0x24a035(0x1d7) + _0x24a035(0x1ef)](exports, _0x24a035(0x1ee), _0x34bfa9);
const sequelize_1 = require(_0x24a035(0x1e3));
module[_0x24a035(0x1f8)] = {
    'up': _0x5a2d8b => {
        const _0x3b6ecf = _0x24a035, _0x13a954 = {};
        _0x13a954[_0x3b6ecf(0x1e9)] = _0x3b6ecf(0x1f3) + _0x3b6ecf(0x1db), _0x13a954[_0x3b6ecf(0x1e2)] = _0x3b6ecf(0x1d5), _0x13a954[_0x3b6ecf(0x1d8)] = _0x3b6ecf(0x1e5), _0x13a954[_0x3b6ecf(0x1f4)] = _0x3b6ecf(0x1f7), _0x13a954[_0x3b6ecf(0x1e0)] = _0x3b6ecf(0x1ed);
        const _0x25d61d = _0x13a954, _0x187979 = {};
        return _0x187979[_0x3b6ecf(0x1da)] = sequelize_1[_0x3b6ecf(0x1f0)][_0x3b6ecf(0x1e7)], _0x187979[_0x3b6ecf(0x1eb) + _0x3b6ecf(0x1df)] = !![], _0x187979[_0x3b6ecf(0x1e1)] = !![], _0x187979[_0x3b6ecf(0x1de)] = ![], _0x5a2d8b[_0x3b6ecf(0x1f2) + 'e'](_0x25d61d[_0x3b6ecf(0x1e9)], {
            'id': _0x187979,
            'walletId': {
                'type': sequelize_1[_0x3b6ecf(0x1f0)][_0x3b6ecf(0x1e7)],
                'references': {
                    'model': _0x25d61d[_0x3b6ecf(0x1e2)],
                    'key': 'id'
                },
                'onUpdate': _0x25d61d[_0x3b6ecf(0x1d8)],
                'onDelete': _0x25d61d[_0x3b6ecf(0x1d8)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[_0x3b6ecf(0x1f0)][_0x3b6ecf(0x1e7)],
                'references': {
                    'model': _0x25d61d[_0x3b6ecf(0x1f4)],
                    'key': 'id'
                },
                'onUpdate': _0x25d61d[_0x3b6ecf(0x1d8)],
                'onDelete': _0x25d61d[_0x3b6ecf(0x1d8)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[_0x3b6ecf(0x1f0)][_0x3b6ecf(0x1e7)],
                'references': {
                    'model': _0x25d61d[_0x3b6ecf(0x1e0)],
                    'key': 'id'
                },
                'onUpdate': _0x25d61d[_0x3b6ecf(0x1d8)],
                'onDelete': _0x25d61d[_0x3b6ecf(0x1d8)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x3b6ecf(0x1f0)][_0x3b6ecf(0x1e6)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x3b6ecf(0x1f0)][_0x3b6ecf(0x1e6)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x51e916 => {
        const _0x5e6fc2 = _0x24a035, _0x1e908a = {};
        _0x1e908a[_0x5e6fc2(0x1f6)] = _0x5e6fc2(0x1f3) + _0x5e6fc2(0x1db);
        const _0x7905b8 = _0x1e908a;
        return _0x51e916[_0x5e6fc2(0x1d6)](_0x7905b8[_0x5e6fc2(0x1f6)]);
    }
};