package com.book.store.controller;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.book.store.dto.BookDTO;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/book")
public class StoreController {
	
	
	@GetMapping("/initialize-session")
	public void intialize(HttpServletRequest req) {
		
		ArrayList<BookDTO> wishlist = new ArrayList<>();
		
		ArrayList<BookDTO> bookList = new ArrayList<>();
		
		HttpSession session = req.getSession();

		session.setAttribute("wishlist",wishlist);
	
		session.setAttribute("bookList",bookList);
	}
	
	
	
	
	@GetMapping("/list")
	public String getBooks() {
	    JSONArray array = new JSONArray();	
	    JSONObject obj = new JSONObject();
	    obj.put("name", "");
	    array.put(obj);
	    
	    BookDTO book1 = new BookDTO();
	    book1.setName("Book 1");
	    book1.setAuthor("w43");
	    book1.setPrice(300);
	    book1.setDescription("Book 1 desc");
	    book1.setPublishYear(2021);
	    
	    BookDTO book2 = new BookDTO();
	    book2.setName("Book 2");
	    book2.setAuthor("w45863");
	    book2.setPrice(300);
	    book2.setDescription("Book 2 desc");
	    book2.setPublishYear(2022);
	    
	    ArrayList<BookDTO> list = new ArrayList<>();
	    list.add(book1);
	    list.add(book2);
	    
	    
	    return new JSONArray(list).toString();
	 }
	
	
	@PostMapping("/sync-wishlist")
	public String syncWishlist(@RequestBody ArrayList<BookDTO>  body, HttpServletRequest req) {
		String res = "";
		HttpSession session = req.getSession();
		
	
		session.setAttribute("wishlist",body);
	
	
		
		return res;
	}
	
	@PostMapping("/sync-book-list")
	public String syncBooklist(@RequestBody ArrayList<BookDTO>  body, HttpServletRequest req) {
		String res = "";
		HttpSession session = req.getSession();
		
		session.setAttribute("bookList",body);
	
		
		return res;
	}
	
	@PostMapping("/add-book")
	public String addBook(@RequestBody BookDTO  body, HttpServletRequest req) {
		String res = "";
		HttpSession session = req.getSession();
		
		if (session.getAttribute("booklist") != null) {
			 ArrayList<BookDTO> list = ( ArrayList<BookDTO> )session.getAttribute("booklist");
			 list.add(body);
			 session.setAttribute("bookList",list);
		}
		
		return res;
	}
	
	@PostMapping("/add-wishlist")
	public String addWishlist(@RequestBody BookDTO  body, HttpServletRequest req) {
		String res = "";
		HttpSession session = req.getSession();
		
		if (session.getAttribute("wishlist") != null) {
			 ArrayList<BookDTO> list = ( ArrayList<BookDTO> )session.getAttribute("wishlist");
			 list.add(body);
			 session.setAttribute("wishlist",list);
		}
		
		return res;
	}

}
