import {Injectable} from "@tsed/cli-core";
import {paramCase} from "change-case";

@Injectable()
export class RoutePipe {
  transform(route: string) {
    return `/${route
      .split("/")
      .reduce((paths: string[], path) => {
        const word = paramCase(path);

        if (paths.includes(`${word}s`) || paths.includes(word)) {
          return paths;
        }

        return [...paths, paramCase(path)];
      }, [])
      .join("/")}`.replace(/\/\//gi, "/");
  }
}
