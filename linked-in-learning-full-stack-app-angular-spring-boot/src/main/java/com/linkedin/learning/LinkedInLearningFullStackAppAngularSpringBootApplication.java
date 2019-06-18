package com.linkedin.learning;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication

// configures beans in spring application context
@EnableAutoConfiguration

//enable automatic scanning for configuration classes in spring application context
@ComponentScan
public class LinkedInLearningFullStackAppAngularSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(LinkedInLearningFullStackAppAngularSpringBootApplication.class, args);
	}

}
