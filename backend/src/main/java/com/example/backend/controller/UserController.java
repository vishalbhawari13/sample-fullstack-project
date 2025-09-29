package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
  private final UserRepository userRepository;
  public UserController(UserRepository userRepository){ this.userRepository = userRepository; }

  @GetMapping
  public List<User> all(){ return userRepository.findAll(); }

  @PostMapping
  public User create(@RequestBody User user){ return userRepository.save(user); }
}
