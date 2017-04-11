var MyApp;
(function (MyApp) {
    class Count {
        constructor(Id, Type, NumDone, NumGoal) {
            this.Id = Id;
            this.Type = Type;
            this.NumDone = NumDone;
            this.NumGoal = NumGoal;
        }
        static fromCreate(c) {
            return c;
        }
    }
    MyApp.Count = Count;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=count.js.map