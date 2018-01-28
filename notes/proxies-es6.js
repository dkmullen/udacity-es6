/*jshint esversion: 6 */

const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);

agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)
