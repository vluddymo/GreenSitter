package de.neuefische.greensitter.service;

import org.springframework.stereotype.Service;

@Service
public class DataService {
    public int mockSensorData(){
        return (30 + (int)(Math.random() * (70 + 1)));
    }
}
