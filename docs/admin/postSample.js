module.exports = {
    post: {
        tags: ['Accounts operations'],
        description: "Register Account",
        operationId: "registerAccount",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/TodoInput'
                    }
                }
            }
        },
        responses: {
            '201': {
                description: "Account Created Successfully"
            },
            '500': {
                description: 'Server error'
            }
        }
    }
}