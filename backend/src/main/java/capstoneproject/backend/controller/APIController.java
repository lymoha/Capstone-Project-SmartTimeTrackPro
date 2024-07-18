package capstoneproject.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/hello")
public class APIController {

    @GetMapping("/{name}/{id}")
    public String helloGreetMe(@PathVariable String name, @PathVariable String id){
        return name + id;
    }
    
}
