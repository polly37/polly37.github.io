function createArticleCard(article) {
  return `
    <div class="card mb-4">
      <a href="${article.link}" target="_blank">
        <img src="${article.image}" class="article-image" alt="Article image">
      </a>
      <div class="card-body">
        <div class="d-flex align-items-center mb-2">
          <img src="${article.avatar}" class="avatar" alt="Author avatar">
          <div class="ms-2">
            <div class="author-name">${article.author}</div>
            <div class="post-date">${article.date}</div>
          </div>
        </div>
        <h2 class="article-title">
          <a href="${article.link}" target="_blank">${article.title}</a>
        </h2>
        <div class="article-tags">
          ${article.tags.map(tag => `<a href="#" class="tag">#${tag}</a>`).join('')}
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const articles = [
    {
      link: 'https://mp.weixin.qq.com/s/WV_31jbjb10IMqYzL1T9Pw',
      image: 'images/640.png',
      avatar: 'images/touxiang.jpg',
      author: '鸣姐',
      date: '2024/07/23',
      title: '泪目的拥抱亲人AI视频怎么做？详细教程分享',
      tags: ['AI视频', 'AI经验', '视频制作'],
    },
    // 你可以在这里添加更多文章对象
    {
      link: 'https://mp.weixin.qq.com/s/yDTvdOrg2WLL8Mv8WDbU1Q',
      image: 'images/sousuo.png',
      avatar: 'images/touxiang.jpg',
      author: '鸣姐',
      date: '2024/07/19',
      title: '这个工具厉害到我不想推荐，它真的不是在做屎上雕花的事情',
      tags: ['AI搜索', 'AI经验', '产品分享'],
    },

    {
      link: 'https://mp.weixin.qq.com/s/_vMNYLHx__Q012AzEGnwWQ',
      image: 'images/kimi.png',
      avatar: 'images/touxiang.jpg',
      author: '鸣姐',
      date: '2024/07/18',
      title: 'AI味几乎为 0，无脑写作的 AI 工具：kimi',
      tags: ['AI写作', 'AI经验', '产品分享'],
    },

    {
      link: 'https://mp.weixin.qq.com/s/r_PbZQKsCa5tSSBt78oKzg',
      image: 'images/jianji.png',
      avatar: 'images/touxiang.jpg',
      author: '鸣姐',
      date: '2024/07/17',
      title: '5个头部AI剪辑工具怎么选，一键成大片',
      tags: ['AI剪辑', 'AI经验', '视频制作'],
    },

    {
      link: 'https://mp.weixin.qq.com/s/LLNa58j2X9kD8Y6F56RY0A',
      image: 'images/tishici.png',
      avatar: 'images/touxiang.jpg',
      author: '鸣姐',
      date: '2024/07/06',
      title: '投喂100个10万+爆款标题，AI总结出11条法则',
      tags: ['AI写作', 'AI经验', '提示词'],
    },
  ];

  const container = document.querySelector('.article-container');
  articles.forEach(article => {
    container.innerHTML += createArticleCard(article);
  });
});