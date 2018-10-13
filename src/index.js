class EuNews {
  constructor() {
    this.news = [];
  }

  getNews() {
    return this.news;
  }

  addNews(nota) {
    if (Object.keys(this.findNews(nota.slug)).length === 0) {
      this.news.push(nota);
    }
  }

  removeNews(id) {
    const index = this.news.findIndex(item => item.id === id);
    if (index !== -1) {
      this.news = [...this.news.slice(0, index), ...this.news.slice(index + 1)];
    }
  }

  findNews(slug) {
    if (this.news.some(item => item.slug === slug)) {
      return this.news.find(item => item.slug === slug);
    } else {
      return {};
    }
  }
}

export default EuNews;
