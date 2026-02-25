'use strict';
const _0x3eb382 = _0x408a;
(function (_0x4bffac, _0x520112) {
    const _0x2bf21a = _0x408a, _0x186211 = _0x4bffac();
    while (!![]) {
        try {
            const _0x2b14f6 = -parseInt(_0x2bf21a(0x17a)) / (0x84 + 0x1 * 0x17f5 + 0x1878 * -0x1) + -parseInt(_0x2bf21a(0x161)) / (0x1 * 0x650 + 0x8 * 0x494 + -0x46 * 0x9d) * (parseInt(_0x2bf21a(0x16e)) / (-0x1 * -0x2546 + 0x20da + 0x243 * -0x1f)) + parseInt(_0x2bf21a(0x17e)) / (-0x3 * 0x947 + -0x1113 + 0x2cec) + -parseInt(_0x2bf21a(0x176)) / (-0x1d91 + 0x1e4c + 0x7 * -0x1a) + -parseInt(_0x2bf21a(0x159)) / (0x2398 + -0x51b * 0x3 + 0x131 * -0x11) + -parseInt(_0x2bf21a(0x15a)) / (-0x2061 + -0x125c + 0x32c4) + -parseInt(_0x2bf21a(0x171)) / (-0x11 * 0x7f + -0x1 * -0x892 + -0x1 * 0x1b) * (-parseInt(_0x2bf21a(0x180)) / (-0x6 * 0x269 + -0x1bf * -0x15 + 0x81 * -0x2c));
            if (_0x2b14f6 === _0x520112)
                break;
            else
                _0x186211['push'](_0x186211['shift']());
        } catch (_0xd338f4) {
            _0x186211['push'](_0x186211['shift']());
        }
    }
}(_0x3b52, -0x1 * 0x4c9f7 + -0x7f * 0x136d + 0x1991a6));
function _0x408a(_0x2ee03e, _0x198132) {
    const _0x495b33 = _0x3b52();
    return _0x408a = function (_0x249d1c, _0x5a0559) {
        _0x249d1c = _0x249d1c - (0x2 * 0x647 + 0x1855 + -0x238b);
        let _0x3627a9 = _0x495b33[_0x249d1c];
        return _0x3627a9;
    }, _0x408a(_0x2ee03e, _0x198132);
}
const _0x5b1abc = {};
_0x5b1abc[_0x3eb382(0x162)] = !![], Object[_0x3eb382(0x173) + _0x3eb382(0x17d)](exports, _0x3eb382(0x169), _0x5b1abc);
const sequelize_1 = require(_0x3eb382(0x165));
module[_0x3eb382(0x16f)] = {
    'up': _0x1539df => {
        const _0x183eb0 = _0x3eb382, _0x1e1802 = {};
        _0x1e1802[_0x183eb0(0x170)] = _0x183eb0(0x168) + 's', _0x1e1802[_0x183eb0(0x15f)] = _0x183eb0(0x15d) + _0x183eb0(0x167), _0x1e1802[_0x183eb0(0x174)] = _0x183eb0(0x16a), _0x1e1802[_0x183eb0(0x181)] = _0x183eb0(0x179), _0x1e1802[_0x183eb0(0x16b)] = _0x183eb0(0x17b), _0x1e1802[_0x183eb0(0x16c)] = _0x183eb0(0x163);
        const _0x592f3b = _0x1e1802, _0x85e54a = {};
        _0x85e54a[_0x183eb0(0x16d)] = !![];
        const _0x4d0a09 = {};
        return _0x4d0a09[_0x183eb0(0x16d)] = !![], _0x4d0a09[_0x183eb0(0x15b)] = [
            -0x1 * 0x7f + -0x1fbc + 0x1 * 0x2047,
            0x104f + 0x74 * -0x56 + 0x16b7
        ], Promise[_0x183eb0(0x17f)]([_0x1539df[_0x183eb0(0x177) + 'e'](_0x592f3b[_0x183eb0(0x170)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x172)],
                    'defaultValue': sequelize_1[_0x183eb0(0x166)][_0x183eb0(0x15c)](_0x592f3b[_0x183eb0(0x15f)])
                },
                'messageId': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x15e)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x15e)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x17c)],
                    'allowNull': ![],
                    'validate': _0x85e54a
                },
                'ack': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x178)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x15e)],
                    'allowNull': ![],
                    'validate': _0x4d0a09
                },
                'mediaName': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x17c)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x178)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x178)],
                    'references': {
                        'model': _0x592f3b[_0x183eb0(0x174)],
                        'key': 'id'
                    },
                    'onUpdate': _0x592f3b[_0x183eb0(0x181)],
                    'onDelete': _0x592f3b[_0x183eb0(0x16b)]
                },
                'tenantId': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x178)],
                    'references': {
                        'model': _0x592f3b[_0x183eb0(0x16c)],
                        'key': 'id'
                    },
                    'onUpdate': _0x592f3b[_0x183eb0(0x181)],
                    'onDelete': _0x592f3b[_0x183eb0(0x181)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x158)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x158)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x160)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[_0x183eb0(0x175)][_0x183eb0(0x160)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': _0xf21072 => {
        const _0x39250c = _0x3eb382, _0x5a8028 = {};
        _0x5a8028[_0x39250c(0x182)] = _0x39250c(0x168) + 's';
        const _0x594fb1 = _0x5a8028;
        return Promise[_0x39250c(0x17f)]([_0xf21072[_0x39250c(0x164)](_0x594fb1[_0x39250c(0x182)])]);
    }
};
function _0x3b52() {
    const _0x454c0a = [
        'Sequelize',
        '_uuid()',
        'ApiMessage',
        '__esModule',
        'Whatsapps',
        'ioEmG',
        'mGiAH',
        'notEmpty',
        '495ICZTCo',
        'exports',
        'pbUMl',
        '16rIeNIl',
        'UUID',
        'defineProp',
        'Ycbsw',
        'DataTypes',
        '183890tjdClR',
        'createTabl',
        'INTEGER',
        'CASCADE',
        '594849zzByln',
        'SET\x20NULL',
        'TEXT',
        'erty',
        '3827944kyEkFn',
        'all',
        '6928641DIdLpX',
        'jCeVs',
        'sowDw',
        'JSONB',
        '691602BVKqOI',
        '6121409KYiUkN',
        'len',
        'literal',
        'gen_random',
        'STRING',
        'QNOJK',
        'DATE',
        '1758BPKTrN',
        'value',
        'Tenants',
        'dropTable',
        'sequelize'
    ];
    _0x3b52 = function () {
        return _0x454c0a;
    };
    return _0x3b52();
}