import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  //hardcoded - fixed -> movies []
  // real time projects => backend REST API => movies []
  private movies = [
    {
      id: 1,
      title: "Tumbbad",
      imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA5Ni41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00079092-wzzsfeaaxh-portrait.jpg",
      description: "Fantasy/Horror/Period",
      language: "Hindi",
      price: 100
    },
    {
      id: 2,
      title: "The Greatest of all time",
      imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyNDguNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401439-xdtxcmtyux-portrait.jpg",
      description: "Action/Drama/Thriller",
      language: "Tamil",
      price: 200
    },
    {
      id: 3,
      title: "Lubber Pandhu",
      imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICAxMS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00409924-fhqlnmfgyt-portrait.jpg",
      description: "Drama/Romantic/Sports",
      language: "Tamil",
      price: 150
    },
    {
      id: 4,
      title: "Kadaisi Ulaga Por",
      imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0LjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00412085-pbuazgngzu-portrait.jpg",
      description: "Action/Sci-Fi",
      language: "Tamil",
      price: 100
    },
    {
      id: 5,
      title: "Joker",
      imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-ODMuN0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352820-qzpmggkprk-portrait.jpg",
      description: "Drama/Suspense/Thriller",
      language: "English",
      price: 250
    }
  ];

  getAllMovies() {
    return this.movies;
  }

  // find method => Returns single movie if matched, else null
  getMovieDetail(title: string) {
    const selectedMovie = this.movies.find(obj => obj.title == title); // {}
    return selectedMovie;
  }

  // filter method returns []
  getMoviesByLanguage(language: string) {
    const filteredMovies = this.movies.filter(obj => obj.language == language); //[]
    return filteredMovies;
  }

  getMoviesLessThanPrice(price: number) {

  }


}
