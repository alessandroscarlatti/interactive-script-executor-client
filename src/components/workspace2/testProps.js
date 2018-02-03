/*
 * test props for building building popsicles
 */

export const rabbitQueueProps = {
    type: "component",
    def: {
        component: {
            type: "Rabbit Queue",
        },
        vars: {
            addresses: "localhost:5672",
            vhost: "/",
            username: "guest",
            password: "guest",
        },
        disp: {
            name: "Rabbit Queue #1",
            img: "/images/rabbit-queue.png"
        },
    },
    userDef: {
        vars: {},
        disp: {},
    }
};
