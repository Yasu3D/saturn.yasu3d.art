Prism.languages.sat = {
    'comment': {
        pattern: /^#.*/m,
    },
    
    'tag': {
        pattern: /^@[A-Z\d_]+[\s•]+/m,
        inside: {
            'key': {
                pattern: /^@[A-Z\d_]+/,
                greedy: true,
            },
            'space': {
                pattern: /(?<=^@[A-Z\d_]+)[\s•]+/,
                greedy: true,
            },
        },
    },
    
    'gimmick': {
        pattern: /^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+[A-Z_]+(\.[A-Z_\d]+)?([\s•]+[+\-\d.]*)?([\s•]+\d+)?$/m,
        inside: {
            'space0': {
                pattern: /^[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'measure': {
                pattern: /(?<=^[\s•]*)\d+/,
                greedy: true,
            },
            'space1': {
                pattern: /(?<=^[\s•]*\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'tick': {
                pattern: /(?<=^[\s•]*\d+[\s•]+)\d+/,
                greedy: true,
            },
            'space2': {
                pattern: /(?<=^[\s•]*\d+[\s•]*\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'index': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+)\d+/,
                greedy: true,
            },
            'space3': {
                pattern: /(?<=^[\s•]*\d+[\s•]*\d+[\s•]*\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'type': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+)[A-Z_]+/,
                greedy: true,
            },
            'attribute': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+[A-Z_]+\.)[A-Z_\d]+/,
                greedy: true,
            },
            'space4': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+[A-Z_]+(\.[A-Z_\d]+)?)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'value0': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+[A-Z_]+(\.[A-Z_\d]+)?[\s•]+)([+\-\d.]*)?/,
                greedy: true,
                alias: 'value',
            },
            'space5': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+[A-Z_]+(\.[A-Z_\d]+)?[\s•]+[+\-\d.]+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'value1': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+[A-Z_]+(\.[A-Z_\d]+)?[\s•]+[+\-\d.]+[\s•]+)\d+$/,
                greedy: true,
                alias: 'value',
            },
        },
    },

    'note': {
        pattern: /^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+\d+[\s•]+\d+[\s•]+[A-Z_]+(?:.[A-Z_\d]+)?/,
        inside: {
            'space0': {
                pattern: /^[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'measure': {
                pattern: /(?<=^[\s•]*)\d+/,
                greedy: true,
            },
            'space1': {
                pattern: /(?<=^[\s•]*\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'tick': {
                pattern: /(?<=^[\s•]*\d+[\s•]+)\d+/,
                greedy: true,
            },
            'space2': {
                pattern: /(?<=^[\s•]*\d+[\s•]*\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'index': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+)\d+/,
                greedy: true,
            },
            'space3': {
                pattern: /(?<=^[\s•]*\d+[\s•]*\d+[\s•]*\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'position': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+)\d+/,
                greedy: true,
            },
            'space4': {
                pattern: /(?<=^[\s•]*\d+[\s•]*\d+[\s•]*\d+[\s•]*\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'size': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+\d+[\s•]+)\d+/,
                greedy: true,
            },
            'space5': {
                pattern: /(?<=^[\s•]*\d+[\s•]*\d+[\s•]*\d+[\s•]*\d+[\s•]*\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'type': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+\d+[\s•]+\d+[\s•]+)[A-Z_]+/,
                greedy: true,
            },
            'attribute': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+\d+[\s•]+\d+[\s•]+[A-Z_]+\.)[A-Z_\d]+/,
                greedy: true,
            },
        },
    },
    
    'annotation': {
        pattern: /^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+.*/m,
        inside: {
            'space0': {
                pattern: /^[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'measure': {
                pattern: /(?<=^[\s•]*)\d+/,
                greedy: true,
            },
            'space1': {
                pattern: /(?<=^[\s•]*\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'tick': {
                pattern: /(?<=^[\s•]*\d+[\s•]+)\d+/,
                greedy: true,
            },
            'space2': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'index': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+)\d+/,
                greedy: true,
            },
            'space3': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+)[\s•]+/,
                greedy: true,
                alias: 'space',
            },
            'message': {
                pattern: /(?<=^[\s•]*\d+[\s•]+\d+[\s•]+\d+[\s•]+).*/,
                greedy: true,
            },
        },
    },
};