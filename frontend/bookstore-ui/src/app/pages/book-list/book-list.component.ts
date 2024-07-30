import { Component } from '@angular/core';
import { CommonUtilService } from 'src/app/services/common-util.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  bookList: any;
  wishlist:any = [];

  constructor(private util:CommonUtilService){

  }

  async ngOnInit() {
    try {
      this.bookList =  await this.util.get('api/book/list');
    } catch (error) {
      console.log('error found', error);
    }
     
     let tempWishlist = localStorage.getItem('localWishlist');
     if (tempWishlist) {
        this.wishlist = JSON.parse(tempWishlist);
     } 
     setInterval(async () => {
       await this.save();
     }, 10000);
  }

  addToWishlist(book:any) {
    this.wishlist.push(book);
    this.util.post('api/book/sync-wishlist',this.wishlist);
    localStorage.setItem('localWishlist', JSON.stringify(this.wishlist));
  }

  async deleteFromWishlist(oldBook:any) {
    let newWishlist = this.wishlist.filter((book:any) => {
      if (book.name != oldBook.name) 
        return true;
      else return false; 
    });
    this.wishlist = newWishlist;;
    localStorage.setItem('localWishlist', JSON.stringify(this.wishlist));
    this.util.post('api/book/sync-wishlist',this.wishlist);
  }

  async save() {
    let str: any = localStorage.getItem('wishlist');
    if (!this.wishlist && localStorage.getItem('wishlist') != undefined && JSON.parse(str).length > 0) {
      localStorage.setItem('localWishlist', JSON.stringify(this.wishlist));
      this.wishlist = JSON.parse(str);
      console.log('from update wishlist')
    }

    if (this.wishlist) {
      await this.util.post('api/book/sync-wishlist',this.wishlist);
    }
  
  }



}
