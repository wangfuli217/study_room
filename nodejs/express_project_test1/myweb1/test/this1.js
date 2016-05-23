function func() {
    if(global == this) {
        console.log("window === this");
    }
};

func();
