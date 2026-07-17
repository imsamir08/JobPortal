class QueryBuilder {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    if (this.queryString.search) {
      const keyword = this.queryString.search;

      this.query = this.query.find({
        $or: [
          {
            title: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            company: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            description: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            location: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            skills: {
              $regex: keyword,
              $options: "i",
            },
          },
        ],
      });
    }

    return this;
  }

  filter() {
    const filters = {};

    if (this.queryString.location) {
      filters.location = {
        $regex: this.queryString.location,
        $options: "i",
      };
    }

    if (this.queryString.jobType) {
      filters.jobType = this.queryString.jobType;
    }

    if (this.queryString.category) {
      filters.category = this.queryString.category;
    }

    if (this.queryString.remoteType) {
      filters.remoteType =
        this.queryString.remoteType;
    }

    if (this.queryString.experience) {
      filters.experience =
        this.queryString.experience;
    }

    this.query = this.query.find(filters);

    return this;
  }

  sort() {
    const sort = this.queryString.sort;

    switch (sort) {
      case "oldest":
        this.query = this.query.sort({
          createdAt: 1,
        });
        break;

      case "salary-low":
        this.query = this.query.sort({
          salary: 1,
        });
        break;

      case "salary-high":
        this.query = this.query.sort({
          salary: -1,
        });
        break;

      case "company":
        this.query = this.query.sort({
          company: 1,
        });
        break;

      default:
        this.query = this.query.sort({
          createdAt: -1,
        });
    }

    return this;
  }

  paginate(resultPerPage = 9) {
    const currentPage =
      Number(this.queryString.page) || 1;

    const skip =
      resultPerPage * (currentPage - 1);

    this.query = this.query.skip(skip).limit(
      resultPerPage
    );

    return this;
  }
}

module.exports = QueryBuilder;