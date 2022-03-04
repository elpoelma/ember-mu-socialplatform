import Route from '@ember/routing/route';

export default class PostsRoute extends Route {

    async model(){
        let result = await this.store.findAll('post');
        result.forEach(async post => {
            let author = await post.author;
            console.log(author.nickname);
        })
        return result;
    }
}
