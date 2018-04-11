import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { AuthService } from '@app/auth/auth.service';
import { Post } from './post';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Observable<Post>;// Used for injecting a post in the post-browser
  constructor(
    private afs: AngularFirestore,
    //public auth: AuthService,
    private route: ActivatedRoute, ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // Sets the current post. Cast the return to prevent typecasting errors
      this.post = this.afs.doc('posts/' + params['id']).valueChanges() as Observable<Post>
    });
  }
}
