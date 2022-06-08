module.exports = {
    get: {
        tags: ['Accounts operations'],
        description: "Enter your name and id",
        operationId: "getAccount",
        // parameters: [
        //     {
        //         name: "name",
        //         in: "path",
        //         schema: {
        //             $ref: "#/components/schemas/name"
        //         },
        //         required: true,
        //         description: "Enter name"
        //     },
        //     {
        //         name: "id",
        //         in: "path",
        //         schema: {
        //             $ref: "#/components/schemas/id"
        //         },
        //         required: true,
        //         description: "Enter id"
        //     }
        // ],
        responses: {
            '200': {
                description: "names are here",
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas"
                        }
                    }
                }
            },
            '404': {
                description: "Account is not found",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error',
                            example: {
                                message: "We can't find the Account",
                                internal_code: "Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}