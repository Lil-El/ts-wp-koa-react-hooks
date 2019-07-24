interface IYD {
  str: string;
}
class Index {
  private data: string;
  constructor(data: IYD) {
    this.data = data.str;
  }
  log() {
    console.log(this.data);
  }
}

const index = new Index({ str: "jcyd" });
index.log();
