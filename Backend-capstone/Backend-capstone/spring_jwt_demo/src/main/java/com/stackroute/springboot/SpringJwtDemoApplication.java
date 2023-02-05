package com.stackroute.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
//import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.stackroute.springboot.filter.JWTFilter;

//@EnableDiscoveryClient
@SpringBootApplication
public class SpringJwtDemoApplication {
	
	@Bean
	public FilterRegistrationBean jwtFilter() 
	{
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new JWTFilter());
		filterRegistrationBean.addUrlPatterns("/api/v1/home");
		return filterRegistrationBean;
	}


	
	public static void main(String[] args) {
		SpringApplication.run(SpringJwtDemoApplication.class, args);
	}
}