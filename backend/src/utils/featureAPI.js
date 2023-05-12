class FeatureAPI {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const querryObj = { ...this.queryString };
    const excludeFeild = ["limit", "sort", "page", "feilds"];

    excludeFeild.forEach((el) => delete querryObj[el]);

    let querryStr = JSON.stringify(querryObj);
    console.log(JSON.parse(querryStr));
    querryStr = querryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    console.log(JSON.parse(querryStr));

    this.query = this.query.find(JSON.parse(querryStr));
    return this;
  }
}

module.exports = FeatureAPI;
