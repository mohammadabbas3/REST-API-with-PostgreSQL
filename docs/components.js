
module.exports = {
    components:{
        schemas:{
            id:{
                type:'string',
                description:"An id of a todo",
                example: "tyVgf"
            },
            email:{
                type:'string',
                description:"An Email of a User",
                example: "admin@mach3bi.com"
            },
            limit:{
                type:'string',
                description:"Limit to Fetch Accounts",
                example: "10"
            },
            page:{
                type:'string',
                description:"Records For Each Page",
                example: "1"
            },
            userID:{
                type:'string',
                description:"An ID of a User",
                example: "0d378738-02e8-42cc-99a2-ed55f8293b2c"
            },
            Todo:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"Todo identification number",
                        example:"ytyVgh"
                    },
                    title:{
                        type:'string',
                        description:"Todo's title",
                        example:"Coding in JavaScript"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the todo",
                        example:false
                    }
                }
            },
            TodoInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Todo's title",
                        example:"Coding in JavaScript"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the todo",
                        example:false
                    }
                }
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}