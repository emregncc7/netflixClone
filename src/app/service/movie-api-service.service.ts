import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66" 

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }



  getSearchMovie(data:any):Observable<any>{
   
    console.log(data,'movie#');
    
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);

  }

  getMovieDetails(data:any):Observable<any>
  {
       return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  getMovieVideo(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)

  }
  
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)

  }


  fetchActionMovies():Observable<any>{
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
  }

  
  fetchAdventureMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
}


fetchAnimationMovies():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
}

fetchComedyMovies():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
}

fetchDocumentMovies():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
}

fetchSlinceFictionMovies():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
}

fetchThrillerMovies():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
}
}

