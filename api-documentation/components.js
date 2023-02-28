const components = {
    components:{
        schemas:{
            id:{
                type:'string',
                description:"An id of a todo",
                example: "tyVgf"
            },
            Joke:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"Joke identification number",
                        example:1
                    },
                    question:{
                        type:'string',
                        description:"Joke question",
                        example:"How is coding in JavaScript?"
                    },
                    answer:{
                        type:"string",
                        description:"Joke answer",
                        example: "It's fun!"
                    }
                }
            },

        }
    }
}

export default components;