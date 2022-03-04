import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class NewPostComponent extends Component {
    @tracked headline;
    @tracked body;
    @tracked thumbnailurl;
    @tracked image;
    @tracked imagePreviewURL;
    @service store;

    @action
    async createPost(event){
        event.preventDefault();
        let imageUrl;
        if(this.image){
            let data = new FormData()
            data.append('file', this.image)
            const response = await fetch('/files', {
                method: 'POST',
                headers: new Headers({
                    "Content-Type": "multipart/form-data"
                }),
                body: data
            }
            );
            if(response.ok){
                let image = await response.json();
                imageUrl = `${image.links.self}/download`;
            } else {
                console.log(response);
                throw new Error(response);
            }
        }

        

        const post = this.store.createRecord('post', {
            headline: this.headline,
            articlebody: this.body,
            thumbnailurl: imageUrl
        });
        post.save();
        this.headline = '';
        this.body = '';
        this.imagePreviewURL = '';
        UIkit.modal("#modal-example").hide()
        
    }

    @action
    setPostImage(event){
        console.log("filechange")
        event.preventDefault();
        if(event.target.files){
            let file = event.target.files[0];
            this.image = file;
            const reader = new FileReader();

            reader.onload = (e) => {
                this.imagePreviewURL = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }
}
