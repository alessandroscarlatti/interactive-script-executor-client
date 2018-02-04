/*
 * test props for building building popsicles
 */

export const rabbitQueueProps = {
    type: "component",
    def: {
        component: {
            type: "Rabbit Queue",
        },
        vars: [
            {
                name: "addresses",
                type: "string",
                desc: "addresses",
                sugg: "localhost:5672",
                default: "localhost:5672",
                for:  ["input"],
            },
            {
                name: "username",
                type: "string",
                desc: "username to use for this queue",
                sugg: "guest by default",
                default: "guest",
                for:  ["input"],
            },
            {
                name: "vhost",
                type: "string",
                desc: "virtual host to use for this queue",
                sugg: "/ by default",
                default: "/",
                for:  ["input"],
            },
            {
                name: "password",
                type: "string",
                disp: ["password"],
                desc: "password to use for this queue",
                sugg: "guest by default",
                default: "/",
                for:  ["input"],
            },
        ],
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

export const vars = function() {

    let data = [
        {
            name: "addresses",
            type: "string",
            desc: "addresses",
            sugg: "localhost:5672",
            default: "localhost:5672",
            for: ["input"],
        },
        {
            name: "username",
            type: "string",
            desc: "username to use for this queue",
            sugg: "guest by default",
            default: "guest",
            for: ["input"],
        },
        {
            name: "vhost",
            type: "string",
            desc: "virtual host to use for this queue",
            sugg: "/ by default",
            default: "/",
            for: ["input"],
        },
        {
            name: "password",
            type: "string",
            disp: ["password"],
            desc: "password to use for this queue",
            sugg: "guest by default",
            default: "/",
            for: ["input"],
        },
    ];

    vars.get = (name) => {
        for (let i = 0, len = data.length; i < len; i++) {
            if (data[i].name === name) return data[i]
        }

        return null
    };

    return data;
};

