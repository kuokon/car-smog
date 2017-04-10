module MyApp {

    export class Count {
        
        constructor(
            public Id: number,
            public Type: string,
            public NumDone: number,
            public NumGoal: number)  {
        }
        
        
        static fromCreate(c: Count): Count {
            return c;
        }
        
    }
   
}