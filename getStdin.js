'use strict';
const {stdin} = process;

module.exports = () => {
    return new Promise((resolve, reject) => {
        let result = '';

        if (stdin.isTTY) {
            return result;
        }
    
        stdin.setEncoding('utf8');
    
        for (const chunk of stdin) {
            result += chunk;
        }
    
        resolve(result)
    })
};

module.exports.buffer = () => {
	return new Promise((resolve, reject) => {
        const result = [];
        let length = 0;

        if (stdin.isTTY) {
            return Buffer.concat([]);
        }

        for (const chunk of stdin) {
            result.push(chunk);
            length += chunk.length;
        }

        resolve(Buffer.concat(result, length))
    })
};
