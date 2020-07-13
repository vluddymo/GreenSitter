package de.neuefische.greensitter.security;

import de.neuefische.greensitter.db.UserMongoDb;
import de.neuefische.greensitter.model.GreenSitterUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MongoDbUserDetailsService implements UserDetailsService{

    private final UserMongoDb userDb;

    @Autowired
    public MongoDbUserDetailsService(UserMongoDb userDb) {
        this.userDb = userDb;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<GreenSitterUser> optionalUser = userDb.findById(username);
        if (optionalUser.isEmpty()){
            throw new UsernameNotFoundException("user with username: \""+username+"\" not found");
        }

        GreenSitterUser user = optionalUser.get();

        return new User(user.getUsername(), user.getPassword(), List.of(new SimpleGrantedAuthority("admin")));
    }
}
