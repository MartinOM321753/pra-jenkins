package data.practica.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("api/home")
@CrossOrigin(origins = {"*"})

public class GlobalController {

    @GetMapping("")
    public ResponseEntity<?> getResponse() {
        HashMap<String, Object> response = new HashMap<>();
        response.put("message", "Api funcionando correctamente");
        response.put("data", "OK");
        return  new ResponseEntity<>(response, HttpStatus.OK);
    }

}
